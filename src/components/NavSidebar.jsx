/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const NavSidebar = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  var navItems = []

  if(localStorage.getItem('token') != null){
    navItems = [
      {
        title: "Home",
        itemId: "/home",
        elemBefore: () => <Icon name="coffee" />
      },
      {
        title: "Amazon FBA",
        itemId: "/AmazonFBA",
        subNav: [
          {
            title: "Inventory",
            itemId: "/AmazonFBA/Inventory",
          },
          {
            title: "Inventory Events",
            itemId: "/AmazonFBA/InventoryEvents",
          },
          {
            title: "Inventory Age",
            itemId: "/AmazonFBA/InventoryAge",
          },
          {
            title: "Orders",
            itemId: "/AmazonFBA/Orders",
          },
          {
            title: "Outbound Shipments",
            itemId: "/AmazonFBA/OutboundShipments",
          },
          {
            title: "Replacement Orders",
            itemId: "/AmazonFBA/ReplacementOrders",
          },
          {
            title: "Returns",
            itemId: "/AmazonFBA/Returns",
          },
          {
            title: "Reimbursements",
            itemId: "/AmazonFBA/Reimbursements",
          },
          {
            title: "AMZ Inventory Adjustments",
            itemId: "/AmazonFBA/InventoryAdjustments"
          },
          {
            title: "Removal Orders",
            itemId: "/AmazonFBA/RemovalOrders",
          },
          {
            title: "Removal Shipments",
            itemId: "/AmazonFBA/RemovalShipments",
          },
          {
            title: "Inbound Shipments",
            itemId: "/AmazonFBA/InboundShipments",
          },
          {
            title: "Inbound Shipments Packages",
            itemId: "/AmazonFBA/InboundShipmentsPackages",
          },
        ]
      },
      // {
      //   title: "Customer Service",
      //   itemId: "/CustomerService",
      //   subNav: [
      //     {
      //       title: "Replacement Order Queue",
      //       itemId: "/CustomerService/FBAReplacementOrderQueue",
      //     },
      //   ]
      // },
      {
        title: "Logout",
        itemId: "/logout",
        elemBefore: () => <Icon name="log-out" />
      },
    ]
  } else {
    navItems = [
      {
        title: "Login",
        itemId: "/login",
        elemBefore: () => <Icon name="log-in" />
      },
    ]
    
  }

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            Marketplace Portal
          </span>
        </div>

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={navItems}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              // {
              //   title: "Settings",
              //   itemId: "/settings",
              //   elemBefore: () => <Icon name="activity" />
              // }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
