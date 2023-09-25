import Link from "next/link";
import React from "react";

const AdminStat = ({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) => {
  return (
    <div>
      <Link href={href}>
        <div className="indicator">
          <span className="indicator-item badge badge-primary">new</span>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">{title}</div>
              <div className="stat-value">{value}</div>
              <div className="stat-desc">Click to see</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AdminStat;
