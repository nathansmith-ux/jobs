import JqueryIcon from "../icon/JqueryIcon"
import VanillaJsIcon from "../icon/VanillaJsIcon"
import ReactIcon from "../icon/ReactIcon"
import RubyOnRailsIcon from "../icon/RubyOnRailsIcon"
import ExpressIcon from "../icon/ExpressIcon"
import NextJsIcon from "../icon/NextJsIcon"
import AhrefsIcon from "../icon/AhrefsIcon"
import Ga4Icon from "../icon/Ga4Icon"
import ScreamingFrogIcon from "../icon/ScreamingFrogIcon"
import FirstIcon from "../icon/FirstIcon"
import SecondIcon from "../icon/SecondIcon"
import ThirdIcon from "../icon/ThirdIcon"

interface CardWIconProps {
  header: string
  description: string
  icon?: keyof typeof ICONS
}

type IconComponents = {
  [key: string]: React.ComponentType;
};

const ICONS: IconComponents = {
  jquery: JqueryIcon,
  vanilla: VanillaJsIcon,
  react: ReactIcon,
  ruby: RubyOnRailsIcon,
  express: ExpressIcon,
  next: NextJsIcon,
  ahrefs: AhrefsIcon,
  ga4: Ga4Icon,
  screamingFrog: ScreamingFrogIcon,
  first: FirstIcon,
  second: SecondIcon,
  third: ThirdIcon
};

export default function CardWIcon({ header, description, icon}: CardWIconProps) {

  const renderIcon = () => {
    if (icon) {
      const IconComponent = ICONS[icon];
      return IconComponent ? <IconComponent /> : null;
    }
    return null;
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-60">
      {renderIcon()}
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{header}</h3>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}
