import { useState } from "react"
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function Book({ title, author, year, description }) {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

  return (
    <div style={{ 
      width: "100%",
      maxWidth: "780px",
      border: "1px solid black",
      borderRadius: "5px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)", 
      padding: "16px",
    }}>

      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div>
          <h2>{title}</h2>
          <p style={{fontSize: "19px"}}>by {author} ({year})</p>
        </div>

        {/* Show description part */}
        <div
          onClick={() => setIsDescriptionShown(state => !state)}
          className="show-description-head"
          style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",
          width: "30px",
          fontSize: "23px"
        }}>
          { isDescriptionShown ? <FaAngleUp/> : <FaAngleDown/> }
        </div>
      </div>

      {/* Description */}
      <p style={{ 
        display: isDescriptionShown ? "block" : "none",
        marginTop: "12px",
        fontSize: "17"
      }}> {description} </p>

    </div>
  )
}
