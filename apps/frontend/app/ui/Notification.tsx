import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X, LucideIcon } from 'lucide-react';

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface ToastConfig {
  stripColor: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

interface ToastNotificationProps {
  t: {
    id: string;
    visible: boolean;
  };
  type?: 'success' | 'error' | 'warning' | 'info';
  actions?: ToastAction[];
  onClose?: () => void;
  children: React.ReactNode;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ 
  t, 
  type = 'success', 
  actions = [],
  onClose,
  children
}) => {
  const getTypeConfig = (): ToastConfig => {
    switch (type) {
      case 'success':
        return {
          stripColor: 'bg-green-500',
          icon: CheckCircle,
          iconBg: 'bg-green-500',
          iconColor: 'text-white'
        };
      case 'error':
        return {
          stripColor: 'bg-red-500',
          icon: XCircle,
          iconBg: 'bg-red-500',
          iconColor: 'text-white'
        };
      case 'warning':
        return {
          stripColor: 'bg-yellow-500',
          icon: AlertCircle,
          iconBg: 'bg-yellow-500',
          iconColor: 'text-white'
        };
      case 'info':
      default:
        return {
          stripColor: 'bg-blue-500',
          icon: CheckCircle,
          iconBg: 'bg-blue-500',
          iconColor: 'text-white'
        };
    }
  };

  const config = getTypeConfig();
  const IconComponent = config.icon;

  const renderMessage = (text: string): React.ReactNode => {
    if (text.includes('Trash')) {
      return text.split('Trash').map((part, index) => 
        index === 0 ? (
          <span key={index}>{part}</span>
        ) : (
          <span key={index}>
            <span className="text-blue-600 underline cursor-pointer hover:text-blue-700">
              Trash
            </span>
            {part}
          </span>
        )
      );
    }
    return text;
  };

  return (
    <AnimatePresence mode="wait">
      {t.visible && (
        <motion.div
          initial={{ 
            opacity: 0, 
            y: -50,
            scale: 0.95
          }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          exit={{ 
            opacity: 0, 
            y: -20,
            scale: 0.95,
            transition: { duration: 0.2 }
          }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3
          }}
          className="max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5"
        >
          {/* Left colored strip */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1, duration: 0.2 }}
            className={`w-1 ${config.stripColor} rounded-l-lg flex-shrink-0`}
          />
          
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.15,
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }}
                  className={`w-5 h-5 ${config.iconBg} rounded-full flex items-center justify-center`}
                >
                  //@ts-ignore gemini
                  <IconComponent className={`w-3 h-3 ${config.iconColor}`} fill="currentColor" />
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="ml-3 flex-1"
              >
                <p className="text-sm text-gray-900 leading-relaxed">
                  {children}
                  {actions.map((action, index) => (
                    <span key={index}>
                      {' '}
                      <button
                        onClick={action.onClick}
                        className="text-blue-600 underline hover:text-blue-700 font-medium transition-colors duration-150"
                      >
                        {action.label}
                      </button>
                    </span>
                  ))}
                </p>
              </motion.div>
            </div>
          </div>
          
          {onClose && (
            <div className="flex border-l border-gray-200">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-150"
              >
                //@ts-ignore gemini
                <X className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ToastNotification;