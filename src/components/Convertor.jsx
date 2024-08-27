import {
  Card,
  CardBody,
  Typography,
  Button,
  Select,
  Option,
  Progress,
  IconButton,
} from "@material-tailwind/react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import Upload from "../assets/images/upload.json";
import Loading from "./loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Convertor() {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);
  const [loadingFiles, setLoadingFiles] = useState({});
  const [progressFiles, setProgressFiles] = useState({});
  const [downloadUrls, setDownloadUrls] = useState({});
  const [text, setText] = useState({});
  const notify = () => toast("متن کپی شد");
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

  const processFiles = (selectedFiles) => {
    const validFiles = selectedFiles.filter(
      (file) => file.type.startsWith("image/") || file.name.endsWith(".svg")
    );
    const newFiles = validFiles.map((file) => ({
      file,
      format: file.type === "image/svg+xml" ? "svg" : file.type.split("/")[1],
      targetFormat: "",
    }));
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleTargetFormatChange = (index, format) => {
    const updatedFiles = [...files];
    updatedFiles[index].targetFormat = format;
    setFiles(updatedFiles);
  };
  const handleCopyText = (index) => {
    if (text[index]) {
      navigator.clipboard.writeText(text[index]);
    }
  };
  const handleConvert = async (index) => {
    const currentFile = files[index];
    if (!currentFile || !currentFile.targetFormat) {
      return;
    }

    // Set loading state to true
    setLoadingFiles((prevLoading) => ({
      ...prevLoading,
      [index]: true,
    }));

    // Simulate delay before processing
    setTimeout(async () => {
      setProgressFiles((prevProgress) => ({
        ...prevProgress,
        [index]: 0,
      }));

      if (currentFile.targetFormat === "svg") {
      } else if (currentFile.targetFormat === "pdf") {
      } else if (currentFile.targetFormat === "تبدیل عکس به متن") {
      } else {
      }
    }, 2000); // Delay before starting processing
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
    setProgressFiles((prevProgress) => {
      const newProgress = { ...prevProgress };
      delete newProgress[index];
      return newProgress;
    });
    setDownloadUrls((prevUrls) => {
      const newUrls = { ...prevUrls };
      delete newUrls[index];
      return newUrls;
    });
    setText((prevText) => {
      const newText = { ...prevText };
      delete newText[index];
      return newText;
    });
  };

  return (
    <>
      <div dir="ltr" className="flex flex-col justify-center items-center m-6">
        {files.map((fileItem, index) => (
          <>
            <Card
              key={index}
              className="flex flex-col  items-end  md:gap-3 gap-2 justify-center md:p-5 p-2 my-2 "
            >
              <div className="flex flex-row md:items-center items-center">
                <Typography className="text-center font-kalame-regular font-black text-xs md:text-sm">
                  {fileItem.file.name}
                </Typography>
                <IconButton
                  size="sm"
                  color="deep-purple"
                  className="ml-2"
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>

              <div className="flex flex-row items-center md:gap-3 gap-2 justify-center md:p-2 p-0">
                <Button
                  variant="gradient"
                  color={downloadUrls[index] ? "green" : "deep-purple"}
                  className="flex justify-center md:w-20 md:h-10 h-10 w-10 font-kalame-light font-bold tracking-widest text-center"
                  loading={loadingFiles[index]}
                  onClick={
                    downloadUrls[index]
                      ? () => handleDownload(index)
                      : () => handleConvert(index)
                  }
                >
                  {downloadUrls[index] ? "دانلود" : "تبدیل"}
                </Button>
              </div>
            </Card>

            {loadingFiles[index] ? (
              /* From Uiverse.io by jeremyssocial */
              <Loading />
            ) : null}
          </>
        ))}

        <Card
          className={`border ${
            dragging ? "border-color-base bg-red-50" : "border-color-base"
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
                  
                  className="flex justify-center items-center gap-3 mt-5 w-[100%] md:w-[40%]  bg-color-base text-white shadow-color-base shadow-2xl "
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
                    <Typography className="font-kalame-medium text-sm">
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
          bodyClassName={"text-color-base font-kalame-medium "}
          position={"top-center"}
        />
      </div>
    </>
  );
}
const handleButtonClick = () => {
  document.getElementById("fileInput").click();
};
