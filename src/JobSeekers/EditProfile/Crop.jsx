import getCropped from './CroppedImage';
import Cropper from 'react-easy-crop';
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
// import img from '../../assets/messageIcon.png'

export const Crop = ({ imageUrl, close, update, cancel }) => {
  // states
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [croppedArea, setCroppedAre] = useState(null);

  useEffect(() => {
    console.log(imageUrl);
  }, []);

  // methods
  const closeModal = () => close?.(false);
  const handleCropChange = (crop) => { setCrop(() => crop); };
  const handleZoomChange = (zoom) => { setZoom(() => zoom); };
  const onCropComplete = (croppedArea, croppedAreaPexels) => { setCroppedAre(croppedAreaPexels) };
  const onCrop = async () => {
    const croppedImage = await getCropped((imageUrl, croppedArea));
    console.log(croppedImage);
    // update?.(croppedImage);
  };

  return createPortal(
    <div className="flex flex-col w-[clamp(20em,40vw,60em)] p-4 bg-white relative aspect-square">
      <div className="grow w-full aspect-video relative">
        <Cropper crop={crop} zoom={zoom} image={imageUrl} onCropChange={handleCropChange} onZoomChange={handleZoomChange} onCropComplete={onCropComplete} />
      </div>
      <div className="w-full flex items-center justify-center gap-2 py-2">
        <button onClick={onCrop} className="bg-blue text-white p-1 flex items-center justify-center font-bold px-4 rounded">crop</button>
        <button onClick={cancel} className="bg-blue text-white p-1 flex items-center justify-center font-bold px-4 rounded">cancel</button>
      </div>
    </div>
    , document.querySelector("#portal"));
};
