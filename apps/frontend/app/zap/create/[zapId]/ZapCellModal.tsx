import React from "react";
import Modal from "@/app/ui/Modal";
import ZapCell from "@/app/components/ZapDashboard/ZapCell";
import SelectItem from "@/app/components/ZapCreate/SelectItem";

interface ZapCellModalProps {
  // ZapCell props
  loading: boolean;
  SelectCell: (index: number) => void;
  imagePath?: string;
  title: string;
  subtitle: string;
  order: number;

  // SelectItem props
  type: "triggers" | "actions";

  // Optional modal configuration
  modalName?: string;
}

export default function ZapCellModal({
  loading,
  SelectCell,
  imagePath,
  title,
  subtitle,
  order,
  type,
  modalName = "select",
}: ZapCellModalProps) {
  return (
    <Modal>
      <Modal.Open opens={modalName}>
        <div>
          <ZapCell
            loading={loading}
            SelectCell={SelectCell}
            imagePath={imagePath}
            title={title}
            subtitle={subtitle}
            order={order}
          />
        </div>
      </Modal.Open>

      <Modal.Window name={modalName}>
        <SelectItem type={type} />
      </Modal.Window>
    </Modal>
  );
}

// Alternative version with more flexibility for different modal configurations
interface FlexibleZapCellModalProps extends ZapCellModalProps {
  // Custom render function for modal content
  renderModalContent?: () => React.ReactNode;

  // Custom props to pass to ZapCell
  zapCellProps?: Record<string, any>;

  // Custom props to pass to SelectItem
  selectItemProps?: Record<string, any>;
}

export function FlexibleZapCellModal({
  loading,
  SelectCell,
  imagePath,
  title,
  subtitle,
  order,
  type,
  modalName = "select",
  renderModalContent,
  zapCellProps = {},
  selectItemProps = {},
}: FlexibleZapCellModalProps) {
  return (
    <Modal>
      <Modal.Open opens={modalName}>
        <div>
          <ZapCell
            loading={loading}
            SelectCell={SelectCell}
            imagePath={imagePath}
            title={title}
            subtitle={subtitle}
            order={order}
            {...zapCellProps}
          />
        </div>
      </Modal.Open>

      <Modal.Window name={modalName}>
        {renderModalContent ? (
          renderModalContent()
        ) : (
          <SelectItem type={type} {...selectItemProps} />
        )}
      </Modal.Window>
    </Modal>
  );
}
