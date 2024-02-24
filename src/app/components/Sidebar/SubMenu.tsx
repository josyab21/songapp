import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface SidebarLinkProps {
  to: string;
}

interface DropdownLinkProps {
  to: string;
}

interface SubMenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

interface MenuItem extends SubMenuItem {
  subNav?: SubMenuItem[];
  iconOpened?: JSX.Element;
  iconClosed?: JSX.Element;
}

interface SubMenuProps {
  item: MenuItem;
}

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav?.map((subItem, index) => (
          <DropdownLink to={subItem.path} key={index}>
            {subItem.icon}
            <SidebarLabel>{subItem.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

const SidebarLink = styled(Link)<SidebarLinkProps>`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid green;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)<DropdownLinkProps>`
  background: #252831;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;

export default SubMenu;
