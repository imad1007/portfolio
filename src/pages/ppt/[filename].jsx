import { useRouter } from 'next/router';

const PowerPointViewer = () => {
  const router = useRouter();
  const { filename } = router.query;

  // Replace this with your actual production domain (or use relative path if on same domain)
  const fileUrl = `https://portfolio-six-gules-85.vercel.app/ppt/${filename}.ppt`;
  const viewerUrl = `https://docs.google.com/gview?url=${fileUrl}&embedded=true`;

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-screen">
        {filename ? (
          <iframe
            src={viewerUrl}
            className="w-full h-screen border rounded-lg shadow-lg"
            title="PPT Viewer"
          />
        ) : (
          <p className="text-center text-gray-500">Loading presentation...</p>
        )}
      </div>
    </div>
  );
};

export default PowerPointViewer;
