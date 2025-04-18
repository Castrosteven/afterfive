import Image from "next/image";

const RenderGooglePhoto = ({ photo }: { photo: string }) => {
  return (
    <Image
      src={`/api/venue/photo?name=${photo}&maxWidth=400&maxHeight=400`}
      alt={`Venue photo`}
      fill
      priority
      className="object-cover rounded-lg"
    />
  );
};

export default RenderGooglePhoto;
