import {
  Card,
  CardBody,
  Typography,
  Button,
  IconButton,
  Slider,
} from "@material-tailwind/react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import Upload from "../assets/images/upload.json";
import Loading from "./loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import imageCompression from "browser-image-compression";

export default function ImageCompressor() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState({});
  const [downloadUrls, setDownloadUrls] = useState({});
  const [compressionLevels, setCompressionLevels] = useState({}); // Track compression levels
  const [fileSizes, setFileSizes] = useState({}); // Track file sizes

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event.target.files);
    processFiles(selectedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
    const droppedFiles = Array.from(event.dataTransfer.files);
    processFiles(droppedFiles);
  };

  const processFiles = async (selectedFiles) => {
    const validFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );
  
    // Add new files to the state
    const newFiles = await Promise.all(
      validFiles.map(async (file) => {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        try {
          const compressedFile = await imageCompression(file, options);
          return {
            file: compressedFile,
            format: compressedFile.type.split("/")[1],
            originalSize: file.size // Save original size
          };
        } catch (error) {
          console.error("Error compressing image:", error);
          return { file, format: file.type.split("/")[1], originalSize: file.size };
        }
      })
    );
  
    setFiles((prevFiles) => {
      const updatedFiles = [...prevFiles, ...newFiles];
      
      // Initialize compression levels for new files
      setCompressionLevels((prevLevels) => {
        const newLevels = newFiles.reduce((acc, _, index) => {
          acc[prevFiles.length + index] = 50; // Set default compression level to 50%
          return acc;
        }, {});
        
        return { ...prevLevels, ...newLevels };
      });

      // Set file sizes
      setFileSizes((prevSizes) => {
        const newSizes = newFiles.reduce((acc, file, index) => {
          acc[prevFiles.length + index] = file.originalSize; // Set original size
          return acc;
        }, {});
        
        return { ...prevSizes, ...newSizes };
      });

      return updatedFiles;
    });
  };
  

  const handleCompressionLevelChange = (index, newLevel) => {
    setCompressionLevels((prevLevels) => ({
      ...prevLevels,
      [index]: newLevel,
    }));
  };

  const handleCompressAndDownload = async (index) => {
    const currentFile = files[index];
    if (!currentFile) {
      return;
    }

    const level = compressionLevels[index] || 50; // Default to 50 if not set

    // Convert slider value (0-100) to quality (1 - max compression)
    const quality = 1 - level / 100;

    setLoadingFiles((prevLoading) => ({
      ...prevLoading,
      [index]: true,
    }));

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        initialQuality: quality, // Use inverted slider value for quality
      };
      const processedFile = await imageCompression(currentFile.file, options);

      const downloadUrl = URL.createObjectURL(processedFile);

      setDownloadUrls((prevUrls) => ({
        ...prevUrls,
        [index]: { url: downloadUrl, name: processedFile.name },
      }));

      // Update file sizes state
      setFileSizes((prevSizes) => ({
        ...prevSizes,
        [index]: processedFile.size, // Save compressed file size
      }));
    } catch (error) {
      console.error("Error during compression:", error);
    } finally {
      setLoadingFiles((prevLoading) => ({
        ...prevLoading,
        [index]: false,
      }));
    }
  };

  const handleDownload = (index) => {
    const downloadFile = downloadUrls[index];
    if (downloadFile) {
      const a = document.createElement("a");
      a.href = downloadFile.url;
      a.download = downloadFile.name;
      a.click();
    }
  };

  const handleFileRemove = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    setLoadingFiles((prevLoading) => {
      const newLoading = { ...prevLoading };
      delete newLoading[index];
      return newLoading;
    });
    setDownloadUrls((prevUrls) => {
      const newUrls = { ...prevUrls };
      delete newUrls[index];
      return newUrls;
    });
    setCompressionLevels((prevLevels) => {
      const newLevels = { ...prevLevels };
      delete newLevels[index];
      return newLevels;
    });
    setFileSizes((prevSizes) => {
      const newSizes = { ...prevSizes };
      delete newSizes[index];
      return newSizes;
    });
  };

  return (
    <>
      <div dir="ltr" className="flex flex-col justify-center items-center m-6">
        {files.map((fileItem, index) => (
          <React.Fragment key={index}>
            <Card className="flex md:gap-3 gap-2 justify-center items-center md:p-1 p-2 my-1 w-full md:w-auto">
              <div className="flex md:flex-row flex-col-reverse items-center md:gap-3 gap-2 justify-center md:p-2 p-1">
                <Button
                  variant="fill"
                  size="sm"
                  className={`flex justify-center md:w-32 md:h-10 h-10 text-nowrap w-36 items-center text-xs font-kalame-light font-bold tracking-widest text-center ${
                    downloadUrls[index]
                      ? "bg-teal-600 text-white hover:shadow-teal-600 text-xs shadow-teal-600 hover:shadow-2xl transition-all duration-300"
                      : "bg-color-base-blue text-white hover:shadow-color-base-blue hover:shadow-lg transition-all duration-500"
                  } `}
                  loading={loadingFiles[index]}
                  onClick={
                    downloadUrls[index]
                      ? () => handleDownload(index)
                      : () => handleCompressAndDownload(index)
                  }
                >
                  {downloadUrls[index] ? "دانلود" : "کاهش حجم"}
                </Button>
                <div className="flex flex-col md:w-auto items-center">
                  <Typography className="text-xs md:text-sm font-kalame-regular font-bold mb-2">
                    درجه کاهش حجم
                  </Typography>
                  <Slider
                    value={compressionLevels[index] || 50}
                    onChange={(e) =>
                      handleCompressionLevelChange(index, e.target.value)
                    }
                    className="text-color-base-blue"
                    color="transparent"
                    min={0}
                    max={100}
                    step={1}
                    marks
                  />
                  <Typography className="text-xs md:text-sm mt-2 font-kalame-regular">
                    % درصد کاهش: {compressionLevels[index] || 50}
                  </Typography>
                  <Typography className="text-xs md:text-sm mt-1 font-kalame-regular ">
                    حجم اصلی: {(fileSizes[index] / 1024).toFixed(2)} KB
                  </Typography>
                  
                </div>
                <Typography className="text-center font-kalame-regular font-black text-xs md:text-sm">
                  {fileItem.file.name}
                </Typography>

                <IconButton
                  size="sm"
                  
                  className="ml-2 border-color-base-blue text-color-base-blue"
                  onClick={() => handleFileRemove(index)}
                  variant="outlined"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
            </Card>

            {loadingFiles[index] && <Loading />}
          </React.Fragment>
        ))}

        <Card
          className={`border ${
            dragging ? "border-color-base-blue bg-red-50" : "border-color-base-blue"
          } border-opacity-30 border-dashed border-2 mt-5 p-12 m-5 w-full`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CardBody>
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center">
                <Lottie
                  animationData={Upload}
                  loop={true}
                  className="w-[80%] md:w-[20%]"
                />
                <Typography className="mt-3 font-kalame-medium text-color-base text-sm md:text-3xl">
                  فایل‌ها رو اینجا بارگزاری کن
                </Typography>
                <Button
                  variant="filled"
                  className="flex justify-center items-center gap-3 mt-5 w-[100%] md:w-[40%] bg-color-base-blue text-white shadow-color-base-blue shadow-2xl"
                  onClick={handleButtonClick}
                >
                  <div className="flex items-center gap-3 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <Typography className="font-kalame-medium text-xs">
                      انتخاب فایل‌ها
                    </Typography>
                  </div>
                </Button>
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  multiple
                  onChange={handleFileSelect}
                />
              </div>
            </div>
          </CardBody>
        </Card>
        <ToastContainer
          progressStyle={{
            color: "black",
            background: "red",
            borderRadius: "10px",
          }}
          rtl={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          draggable={true}
          bodyClassName={"text-color-base font-kalame-medium"}
          position={"top-center"}
        />
      </div>
    </>
  );
}

const handleButtonClick = () => {
  document.getElementById("fileInput").click();
};
