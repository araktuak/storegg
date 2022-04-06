import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

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
  href: string;
}
export default function MenuItem(props: MenuItemProps) {
  const { title, icon, active, href } = props;
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
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
