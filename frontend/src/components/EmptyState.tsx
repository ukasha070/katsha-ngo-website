import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Data Found",
  description = "We couldn't find any results to display.",
  icon: Icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center py-20 text-center text-gray-600",
        className
      )}
    >
      {Icon && <Icon className="w-16 h-16 text-gray-400 mb-4" />}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
