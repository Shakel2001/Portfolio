// components/ToastContainer.jsx
import { useToast } from "../hooks/use-toast"; // adjust path

export const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed top-5 right-5 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white border shadow-md rounded-lg px-4 py-3 max-w-xs text-sm"
        >
          <div className="font-semibold">{toast.title}</div>
          {toast.description && (
            <div className="text-gray-600 mt-1">{toast.description}</div>
          )}
        </div>
      ))}
    </div>
  );
};
