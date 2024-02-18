import React from "react";
import "./styles.css";
export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <small>
          <a
            href="https://github.com/iwenki/SheCodes-project/tree/main"
            target="_blank"
            class="git"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/vanessa-iwen-040831173/?originalSubdomain=es"
            target="_blank"
            class="resume"
          >
            K.Vanessa Iwen
          </a>{" "}
          hosted on Netlify
          <div id="photographer">
            Photo by{" "}
            <a
              href="https://www.pexels.com/@francesco-ungaro/"
              target="_blank"
              class="photographer"
            >
              Francesco Ungaro
            </a>
          </div>
        </small>
      </footer>
    </div>
  );
}
