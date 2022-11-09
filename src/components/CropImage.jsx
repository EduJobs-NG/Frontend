/* eslint-disable react-hooks/rules-of-hooks */
import Cropper from 'react-easy-crop';
import { useCallback, useState } from 'react';

export const Crop = () => {
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({ x: 0, y: 0 });

    // methods
    const onCropComplete = () => useCallback((area, pixel) => void console.log(area, pixel), []);
    return <Cropper />;
};
