import Image from "next/image";
import cx from "classnames";

interface MenuItemProps {
  title: string;
  icon:
    | "ic-menu-overview"
    | "ic-menu-transaction"
    | "ic-menu-card"
    | "ic-menu-logout"
    | "ic-menu-messages"
    | "ic-menu-reward"
    | "ic-menu-setting";
  active?: boolean;
}
export default function MenuItem(props: MenuItemProps) {
  const { title, icon, active } = props;
  const classTitle = cx({
    item: true,
    "mb-30": true,
    active: active,
  });

  return (
    <div className={classTitle}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
