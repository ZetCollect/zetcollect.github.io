import { useState } from "react";
import PropTypes from "prop-types";

const notifications = [
  {
    id: 1,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "GPS Traceability 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "GPS Traceability 1.0.0 is being released into production. This initial release enables real-time vehicle tracking, route history, and geofencing capabilities for fleet management.",
    status: "scheduled",
    platform: "GPS Traceability",
  },
  {
    id: 2,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Missed Collection Alerts 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Missed Collection Alerts 1.0.0 is being released into production. This feature automatically detects and notifies supervisors when scheduled collections are not completed.",
    status: "scheduled",
    platform: "Missed Collection Alerts",
  },
  {
    id: 3,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Client Risk Profile & Rating 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Client Risk Profile & Rating 1.0.0 is being released into production. This feature provides automated credit scoring, risk assessment, and client rating based on payment history.",
    status: "scheduled",
    platform: "Client Risk Profile & Rating",
  },
  {
    id: 4,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Route & Schedule Optimization 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Route & Schedule Optimization 1.0.0 is being released into production. This feature uses AI algorithms to optimize collection routes and schedule assignments for maximum efficiency.",
    status: "scheduled",
    platform: "Route & Schedule Optimization",
  },
  {
    id: 5,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Client Self Portal 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Client Self Portal 1.0.0 is being released into production. This portal allows clients to view their transaction history, make payments, and update personal information online.",
    status: "scheduled",
    platform: "Client Self Portal",
  },
  {
    id: 6,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "New Currency System (CDF) 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "New Currency System (CDF) 1.0.0 is being released into production. This update adds support for Congolese Franc (CDF) as a native currency option for all transactions.",
    status: "scheduled",
    platform: "New Currency System (CDF)",
  },
  {
    id: 7,
    date: "Mar 15, 2026",
    timeStart: "00:00 GMT",
    timeEnd: "04:00 GMT",
    title: "Mobile Money 1.0.0 Release Notification",
    detailsUrl: "#",
    description:
      "Mobile Money 1.0.0 is being released into production. This integration enables mobile money payments through M-PESA, Airtel Money, and other popular mobile payment platforms.",
    status: "scheduled",
    platform: "Mobile Money",
  },
];

const services = [
  "All Services",
  "GPS Traceability",
  "Missed Collection Alerts",
  "Client Risk Profile & Rating",
  "Route & Schedule Optimization",
  "Client Self Portal",
  "New Currency System (CDF)",
  "Mobile Money",
];

const statusConfig = {
  scheduled: { label: "Scheduled" },
  in_progress: { label: "In Progress" },
  completed: { label: "Completed" },
};

const PRIMARY = "#3d9970";
const PRIMARY_DARK = "#2d7a56";
const PRIMARY_ALPHA_10 = "rgba(61,153,112,0.10)";
const PRIMARY_ALPHA_20 = "rgba(61,153,112,0.20)";
const PRIMARY_ALPHA_40 = "rgba(61,153,112,0.40)";

function ChevronDown({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
ChevronDown.propTypes = { className: PropTypes.string };

function ExternalLink({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M9 2h5m0 0v5m0-5L7 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
ExternalLink.propTypes = { className: PropTypes.string };

function Bell({ className = "", style = {} }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
Bell.propTypes = { className: PropTypes.string, style: PropTypes.object };

function NotificationCard({ notification }) {
  const config = statusConfig[notification.status] || statusConfig.scheduled;
  const [linkHover, setLinkHover] = useState(false);

  return (
    <div
      className="relative overflow-hidden transition-all duration-300 bg-white border group border-slate-200 rounded-2xl"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = PRIMARY_ALPHA_40;
        e.currentTarget.style.boxShadow = `0 8px 28px rgba(61,153,112,0.12)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#e2e8f0";
        e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[3px] rounded-l-2xl"
        style={{ background: `linear-gradient(to bottom, ${PRIMARY}, ${PRIMARY_DARK})` }}
      />

      <div className="pl-8 py-7 pr-7">
        <div className="grid items-start grid-cols-12 gap-6">

          {/* ── Date / Time ── */}
          <div className="col-span-2 flex flex-col items-center justify-start pt-0.5">
            <span
              className="text-[13px] font-semibold uppercase mb-3 text-center"
              style={{ letterSpacing: "0.13em", color: "#94a3b8" }}
            >
              {notification.date}
            </span>
            <span
              className="text-[26px] font-semibold tabular-nums text-slate-800 leading-none"
            >
              {notification.timeStart}
            </span>
            <span className="text-[15px] text-slate-400 font-semibold my-2">to</span>
            <span
              className="text-[26px] font-semibold tabular-nums text-slate-800 leading-none"
            >
              {notification.timeEnd}
            </span>
          </div>

          {/* ── Arrow connector ── */}
          <div className="flex items-center self-stretch justify-center col-span-1">
            <div
              className="flex items-center justify-center w-10 h-10 mt-1 rounded-full"
              style={{
                background: PRIMARY_ALPHA_10,
                border: `1px solid ${PRIMARY_ALPHA_20}`,
              }}
            >
              <svg viewBox="0 0 12 12" className="w-5 h-5" fill="none" stroke={PRIMARY} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 6h7M6.5 3.5L9 6l-2.5 2.5" />
              </svg>
            </div>
          </div>

          {/* ── Main Content ── */}
          <div className="col-span-6">
            {/* Status badge + platform chip */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[14px] font-semibold border"
                style={{
                  background: PRIMARY_ALPHA_10,
                  color: PRIMARY,
                  borderColor: PRIMARY_ALPHA_20,
                }}
              >
                <span
                  className="flex-shrink-0 w-2 h-2 rounded-full"
                  style={{ background: PRIMARY }}
                />
                {config.label}
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-[14px] font-semibold bg-slate-100 text-slate-500 border border-slate-200">
                {notification.platform}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-[20px] font-semibold text-slate-800 leading-snug mb-4 transition-colors duration-200"
              style={{ letterSpacing: "-0.01em" }}
              ref={el => {
                if (el) {
                  el.closest(".group")?.addEventListener("mouseenter", () => { el.style.color = PRIMARY; });
                  el.closest(".group")?.addEventListener("mouseleave", () => { el.style.color = ""; });
                }
              }}
            >
              {notification.title}
            </h3>

            {/* Details link */}
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-semibold text-slate-600">For details, see</span>
              <a
                href={notification.detailsUrl}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-200"
                style={{ color: linkHover ? PRIMARY_DARK : PRIMARY }}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setLinkHover(true)}
                onMouseLeave={() => setLinkHover(false)}
              >
                release notes
                <ExternalLink
                  className="w-4 h-4 transition-transform duration-150 opacity-80"
                  style={{ transform: linkHover ? "translate(1px,-1px)" : "translate(0,0)" }}
                />
              </a>
            </div>
          </div>

          {/* ── Description ── */}
          <div className="flex self-stretch col-span-3">
            <div
              className="flex-1 p-5 rounded-xl"
              style={{
                background: "#f8fafb",
                border: "1px solid #eaf3ef",
              }}
            >
              <p className="text-[15px] text-slate-600 leading-relaxed font-semibold">
                {notification.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

NotificationCard.propTypes = {
  notification: PropTypes.shape({
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeStart: PropTypes.string.isRequired,
    timeEnd: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    detailsUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default function UpcomingMaintenance() {
  const [selectedService, setSelectedService] = useState("All Services");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filtered = notifications.filter(
    (n) => selectedService === "All Services" || n.platform === selectedService
  );

  return (
    <div
      className="min-h-screen bg-slate-50"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

        .notification-enter {
          animation: notif-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes notif-in {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .dropdown-panel {
          animation: drop-in 0.18s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @keyframes drop-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-12">
          {/* ── Top bar ── */}
          <div className="flex items-center justify-between mb-12">
            {/* Service dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-3 px-6 py-3.5 bg-white border rounded-2xl text-[16px] font-semibold text-slate-700 transition-all focus:outline-none"
                style={{
                  borderColor: dropdownOpen ? PRIMARY : "#e2e8f0",
                  boxShadow: dropdownOpen
                    ? `0 0 0 3px ${PRIMARY_ALPHA_20}, 0 1px 3px rgba(0,0,0,0.06)`
                    : "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <Bell
                  className="w-5 h-5"
                  style={{ color: dropdownOpen ? PRIMARY : "#94a3b8" }}
                />
                <span>{selectedService}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div
                  className="absolute left-0 z-30 w-64 mt-2 overflow-hidden bg-white border dropdown-panel top-full border-slate-200 rounded-2xl"
                  style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.11)" }}
                >
                  <div className="py-2">
                    {services.map((s) => {
                      const isActive = selectedService === s;
                      return (
                        <button
                          key={s}
                          onClick={() => { setSelectedService(s); setDropdownOpen(false); }}
                          className="w-full text-left px-5 py-3 text-[15px] flex items-center gap-3 transition-colors"
                          style={{
                            background: isActive ? PRIMARY_ALPHA_10 : "transparent",
                            color: isActive ? PRIMARY : "#475569",
                            fontWeight: isActive ? 600 : 600,
                          }}
                          onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "#f8fafc"; }}
                          onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                        >
                          <span
                            className="flex-shrink-0 w-2 h-2 transition-all rounded-full"
                            style={{
                              background: isActive ? PRIMARY : "transparent",
                              border: isActive ? "none" : "1.5px solid #cbd5e1",
                            }}
                          />
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Notification count */}
            <div
              className="flex items-center gap-2.5 px-5 py-3 rounded-full text-[15px] font-semibold"
              style={{
                background: PRIMARY_ALPHA_10,
                color: PRIMARY,
                border: `1px solid ${PRIMARY_ALPHA_20}`,
              }}
            >
              <span
                className="flex-shrink-0 w-2.5 h-2.5 rounded-full"
                style={{ background: PRIMARY }}
              />
              {filtered.length} release{filtered.length !== 1 ? "s" : ""} scheduled
            </div>
          </div>

          {/* ── Month heading ── */}
          <div className="flex items-center gap-5 mb-8">
            <h2
              className="text-[30px] font-semibold text-slate-700 whitespace-nowrap"
              style={{ letterSpacing: "-0.025em" }}
            >
              Mar 2026
            </h2>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(to right, #cbd5e1, transparent)" }}
            />
          </div>

          {/* ── Cards ── */}
          <div className="flex flex-col gap-5">
            {filtered.map((n, i) => (
              <div
                key={n.id}
                className="notification-enter"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <NotificationCard notification={n} />
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-28 text-slate-400">
                <div
                  className="flex items-center justify-center w-20 h-20 mb-5 rounded-2xl"
                  style={{ background: PRIMARY_ALPHA_10 }}
                >
                  <Bell
                    className="w-10 h-10"
                    style={{ color: PRIMARY, opacity: 0.5 }}
                  />
                </div>
                <p className="text-[18px] font-semibold text-slate-500">No releases scheduled for this feature</p>
                <p className="text-[16px] text-slate-400 mt-2">Try selecting a different service from the dropdown</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}