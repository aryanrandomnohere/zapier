"use client";
import { useState, useRef, useEffect } from 'react';
import ZapCell from "@/app/components/ZapCell";
import AddCell from '@/app/components/AddCell';

export default function Page() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  
  // Handle mouse down to start dragging
  const handleMouseDown = (e) => {
    // Only allow dragging when clicking on the background, not on ZapCells
    if (e.target.closest('.zap-cell')) {
      return;
    }
    
    setIsDragging(true);
    setStartPoint({ 
      x: e.clientX - position.x, 
      y: e.clientY - position.y 
    });
  };
  
  // Handle mouse move during dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = e.clientX - startPoint.x;
    const newY = e.clientY - startPoint.y;
    
    setPosition({ x: newX, y: newY });
  };
  
  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  // Add event listeners for mouse events
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startPoint]);
  
  // Add touch event handlers for mobile support
  const handleTouchStart = (e) => {
    // Only allow dragging when touching the background, not ZapCells
    if (e.target.closest('.zap-cell')) {
      return;
    }
    
    const touch = e.touches[0];
    setIsDragging(true);
    setStartPoint({ 
      x: touch.clientX - position.x, 
      y: touch.clientY - position.y 
    });
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const newX = touch.clientX - startPoint.x;
    const newY = touch.clientY - startPoint.y;
    
    setPosition({ x: newX, y: newY });
  };
  
  const handleTouchEnd = () => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, startPoint]);
  
  return (
    <div className="w-full h-screen overflow-hidden bg-stone-300/20 relative">
      {/* Grid background to visualize movement */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Draggable canvas */}
      <div 
        ref={canvasRef}
        className="absolute w-full h-full"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        {/* Center point indicator */}
        
        {/* Zap cells positioned vertically in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Zap Cell for Trigger */}
          <div className="zap-cell">
            <ZapCell 
              title="Trigger" 
              subtitle="An event that starts your Zap" 
              order={1} 
            />
         
          </div>
          <AddCell/>
          {/* Zap Cell for Action */}
          <div className="zap-cell">
            <ZapCell 
              title="Action" 
              subtitle="An event a Zap performs after it starts" 
              order={2} 
            />
          </div>
          <AddCell/>
          {/* Zap Cell for another Action */}
          <div className="zap-cell">
            <ZapCell 
              title="Action" 
              subtitle="Add another action to your workflow" 
              order={3} 
            />
          </div>
          <AddCell/>
        </div>
      </div>
      
    </div>
  );
}

// CSS for the grid background
const styles = `
  .bg-grid {
    background-image: 
      linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

// Add the CSS to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}