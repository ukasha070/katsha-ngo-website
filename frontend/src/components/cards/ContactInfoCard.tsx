import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type TContactInfoCardProps = {
  title: string;
  description: string;
  detail: string;
  link: string;
  icon: LucideIcon;
  contactInfoIndex: number;
  isLast: boolean;
};

const ContactInfoCard = ({
  link,
  title,
  detail,
  isLast,
  icon: Icon,
  description,
}: TContactInfoCardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        isLast ? "max-lg:col-span-2 max-lg:p-10" : ""
      )}
    >
      <span>
        <Icon size={35} className="stroke-yellow-500" />
      </span>
      <p className="text-2xl font-extrabold">{title}</p>
      <p className="text-base leading-7">{description}</p>
      <Link className="text-lg font-bold text-black/60" href={link}>
        {detail}
      </Link>
    </div>
  );
};

export default ContactInfoCard;
