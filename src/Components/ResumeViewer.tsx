import { Modal } from "@mantine/core";
import { useEffect } from "react";

interface ResumeViewerProps {
    opened: boolean;
    close: () => void;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({ opened, close }) => {
    useEffect(() => {
        // Inject styles directly into the document when the component mounts
        const style = document.createElement("style");
        style.innerHTML = `
        .resume-modal {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
        }

        .resume-wrapper {
            overflow: auto;
            height: 500px;
            background-color: #ffffff; /* Ensures white background */
        }

        /* Custom Scrollbar for Webkit Browsers (Chrome, Edge, Safari) */
        .resume-wrapper::-webkit-scrollbar {
            width: 8px;
        }

        .resume-wrapper::-webkit-scrollbar-track {
            background: #ffffff; /* White track */
        }

        .resume-wrapper::-webkit-scrollbar-thumb {
            background: #64FFDA; /* Green scrollbar */
            border-radius: 4px;
        }

        /* Custom Scrollbar for Firefox */
        .resume-wrapper {
            scrollbar-width: thin;
            scrollbar-color: #64FFDA #ffffff; /* Green thumb, white track */
        }
    `;

        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style); // Clean up styles when component unmounts
        };
    }, []);

    return (
        <Modal opened={opened} onClose={close} size="lg" title="My Resume" className="resume-modal">
            <div className="resume-wrapper">
                <iframe
                    src="https://drive.google.com/file/d/1wzpnRxB0pEt6XeW_ahxHi8YzT9iCqZD4/preview"
                    width="100%"
                    height="500"
                    allow="autoplay"
                    title="Resume"
                    style={{
                        border: "none",
                    }}
                ></iframe>
            </div>
        </Modal>
    );
};

export default ResumeViewer;
