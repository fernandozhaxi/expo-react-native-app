// components/GlobalConfirm.tsx
import React, { useState, useEffect } from "react";
import { Portal, Dialog, Button, Paragraph, } from "react-native-paper";

type ConfirmOptions = {
  title: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

let showConfirmExternal: ((options: ConfirmOptions) => void) | null = null;

export const showConfirm = (options: ConfirmOptions) => {
  if (showConfirmExternal) {
    showConfirmExternal(options);
  }
};

export const GlobalConfirm = () => {
  const [visible, setVisible] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions>({
    title: "",
    message: "",
  });

  useEffect(() => {
    // 将显示函数暴露给外部调用
    showConfirmExternal = (opts: ConfirmOptions) => {
      setOptions(opts);
      setVisible(true);
    };
    return () => {
      showConfirmExternal = null;
    };
  }, []);

  const handleCancel = () => {
    setVisible(false);
    options.onCancel?.();
  };

  const handleConfirm = () => {
    setVisible(false);
    options.onConfirm?.();
  };

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={handleCancel}>
        <Dialog.Title>{options.title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{options.message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={handleCancel}>取消</Button>
          <Button onPress={handleConfirm}>确定</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
