import { ButtonType } from "../Data";

type NavigationBarProps = {
  buttons: ButtonType;
};

export default function NavigationBar({ buttons }: NavigationBarProps) {
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </a>
      {/* eslint-disable-next-line  */}
      <a className="mobile-btn" href="#" title="Hide navigation">
        Hide navigation
      </a>
      <ul id="nav" className="nav">
        {buttons.map((button) => {
          return (
            <li
              className={button.name === "Home" ? "current" : ""}
              key={button.name}
            >
              <a href={button.path} title={button.alt}>
                {button.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
