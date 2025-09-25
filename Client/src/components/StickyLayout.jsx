export default function StickyLayout() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-2xl font-bold">Main Content</h1>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
            Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
          </p>
        ))}
      </div>

      {/* Sidebar */}
      <div className="w-full md:w-1/3">
        <div className="sticky top-8 p-4 border rounded-xl bg-gray-50 shadow">
          <h2 className="font-semibold mb-4">Sidebar (Sticky)</h2>
          <p>This box will stick to the top as you scroll.</p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-sm">
            <li>Author Info</li>
            <li>Categories</li>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
