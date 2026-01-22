import { TopMenu } from "@/components";

export default function shopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen ">
        <TopMenu/>
        {children}
    </div>
  );
}