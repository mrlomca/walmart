// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walmart Feedback – Earn $500",
  description: "Share your thoughts about Walmart and receive $500 as a thank-you gift. No purchase required.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background-color: #fafafa;
                color: #2d3748;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                padding: 0;
              }
              .header {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                background: white;
                padding: 16px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                box-shadow: 0 1px 5px rgba(0,0,0,0.05);
                z-index: 100;
                box-sizing: border-box;
              }
              .logo {
                display: flex;
                align-items: center;
                gap: 8px;
                font-weight: 700;
                font-size: 18px;
                color: #1a202c;
              }
              .logo img {
                width: 32px;
                height: 32px;
              }
              .limited-time {
                background: linear-gradient(90deg, #4f46e5, #60a5fa);
                color: white;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
              }
              .main-wrapper {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 80px; /* Clear space for fixed header */
                padding-bottom: 20px;
                box-sizing: border-box;
              }
              .content {
                text-align: center;
                max-width: 600px;
                padding: 0 20px;
              }
              .tag {
                background: #e6fffa;
                color: #0d9488;
                border: 1px solid #0d9488;
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
                margin-bottom: 24px;
                display: inline-block;
              }
              h1 {
                font-size: clamp(28px, 6vw, 36px);
                font-weight: 600;
                line-height: 1.2;
                margin-bottom: 8px;
              }
              h2 {
                font-size: clamp(36px, 8vw, 48px);
                font-weight: 700;
                margin-bottom: 24px;
                background: linear-gradient(to right, #008000, #007bff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
              }
              p {
                font-size: 16px;
                color: #718096;
                line-height: 1.6;
                margin-bottom: 32px;
              }
              .btn {
                background: #1a202c;
                color: white;
                font-size: 18px;
                font-weight: 600;
                padding: 12px 24px;
                border-radius: 30px;
                cursor: pointer;
                text-decoration: none;
                display: inline-flex;
                align-items: center;
                gap: 8px;
                transition: all 0.2s ease;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
              }
              .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 15px rgba(0,0,0,0.15);
              }
              .time-info {
                font-size: 14px;
                color: #718096;
                margin: 16px 0 24px;
              }
              .features {
                display: flex;
                justify-content: center;
                gap: 20px;
                flex-wrap: wrap;
                margin-top: 24px;
              }
              .feature {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 14px;
                color: #4a5568;
              }
              .dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
              }
              .dot.green { background: #10b981; }
              .dot.blue { background: #3b82f6; }
              .dot.purple { background: #9333ea; }
            `,
          }}
        />
      </head>
      <body>
        <div className="header">
          <div className="logo">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj4KICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiByeT0iNCIgZmlsbD0iIzQyODVmNCIvPgogIDxwb2x5Z29uIHBvaW50cz0iMTIgNiAxNSAxMCAxMiAxNCA5IDEwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4="
              alt="Star"
            />
            Walmart Rewards
          </div>
          <div className="limited-time">Limited Time</div>
        </div>

        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}