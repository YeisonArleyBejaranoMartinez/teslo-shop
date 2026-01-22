
export default function shopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen bg-gray-500">
        {children}
    </div>
  );
}