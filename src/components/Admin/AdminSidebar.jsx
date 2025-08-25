// src/components/Admin/AdminSidebar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, MessageSquare, BarChart3,
  PhoneCall, ClipboardList, FileText, CreditCard,
  Database, Shield, Bell
} from "lucide-react";
import {
  SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarGroupLabel, SidebarMenu, SidebarMenuButton,
  SidebarMenuItem, SidebarHeader
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/admin-dashboard", icon: LayoutDashboard },
      { title: "Analytics", url: "/admin/analytics", icon: BarChart3 }
    ]
  },
  {
    title: "Complaints & Support",
    items: [
      { title: "All Complaints", url: "/admin/complaints", icon: MessageSquare },
      { title: "All Contacts", url: "/admin/contacts", icon: PhoneCall },
      { title: "All Feedback", url: "/admin/feedback", icon: ClipboardList },
      { title: "Complaint Analytics", url: "/admin/complaints/analytics", icon: BarChart3 }
    ]
  },
  {
    title: "User Management",
    items: [
      { title: "All Users", url: "/admin/users", icon: Users },
      { title: "User Verification", url: "/admin/users/verification", icon: Users },
      { title: "User Analytics", url: "/admin/users/analytics", icon: BarChart3 }
    ]
  },
  {
    title: "Billing & Payments",
    items: [
      { title: "Bills Management", url: "/admin/bills", icon: FileText },
      { title: "Payment Processing", url: "/admin/payments", icon: CreditCard },
      { title: "Billing Analytics", url: "/admin/billing/analytics", icon: BarChart3 }
    ]
  },
  {
    title: "System & Security",
    items: [
      { title: "System Health", url: "/admin/system", icon: Database },
      { title: "Security", url: "/admin/security", icon: Shield },
      { title: "Notifications", url: "/admin/notifications", icon: Bell },
    ]
  }
];

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath.startsWith(path);

  const getNavCls = (active) =>
    active
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary"
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <div className="h-full w-full flex flex-col bg-white">
      <SidebarHeader className="border-b border-border/50 p-4">
        <h2 className="text-lg font-bold">Hekto Furniture</h2>
        <p className="text-xs text-muted-foreground">Admin Portal</p>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {menuItems.map((group, groupIndex) => (
          <SidebarGroup key={groupIndex} className="mb-6">
            <SidebarGroupLabel className="text-xs font-semibold uppercase mb-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, i) => (
                  <SidebarMenuItem key={i}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        className={`${getNavCls(isActive(item.url))} flex items-center space-x-3 px-3 py-2 rounded-md`}
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="text-sm">{item.title}</span>
                        {item.badge && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            {item.badge}
                          </Badge>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </div>
  );
}
