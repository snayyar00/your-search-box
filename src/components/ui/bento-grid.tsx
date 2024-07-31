import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gradient-to-br from-violet-300 via-[#14093E] to-[#F2F2] border border-transparent justify-between flex flex-col space-y-4 ",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 ">
        {icon}
        <div className="font-sans font-bold text-neutral-100 dark:text-neutral-200 mb-2 mt-2 sm:text-xl  lg:text-2xl">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-200 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
