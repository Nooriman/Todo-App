import { FC } from "react";
import './HorizontalLine.css';

interface HorizontalLineProps {
    text: string;
}

const HorizontalLineWithText : FC<HorizontalLineProps> = ({text}) => {

    return (
        <div className="horizontal-line-container">
        <div className="horizontal-line"></div>
        <div className="horizontal-line-text">{text}</div>
        <div className="horizontal-line"></div>
      </div>
    )
};

export default HorizontalLineWithText;