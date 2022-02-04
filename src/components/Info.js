import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/avatar.png" />
            <h2>Laura Smith</h2>
            <p className="info--job">Frontend Developer</p>
            <p className="info--email">laurasmith.website</p>
            <div className="info--buttons">
                <button className="btn-email">
                    <img src="./images/Icon.png" />
                    Email
                </button>
                <button className="btn-linkedin">
                    <img src="./images/Vector.png" />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}