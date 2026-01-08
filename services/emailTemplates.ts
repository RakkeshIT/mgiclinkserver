export const emailTemplate = (email: string, link: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Access Your Account</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color:#f4f4f7;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="margin:40px 0; background-color:#ffffff; border-radius:8px; box-shadow:0 0 10px rgba(0,0,0,0.1); overflow:hidden;">
          <tr>
            <td align="center" style="padding: 30px 0; background-color:#4f46e5; color:white; font-size:24px; font-weight:bold;">
              MAGIC APP
            </td>
          </tr>
          <tr>
            <td style="padding: 40px; color:#333333; font-size:16px; line-height:1.5;">
              <p>Hi ${email || "User"},</p>
              <p>You requested access to your MAGIC APP account. Click the button below to log in securely. This link is valid for a limited time.</p>
              <p style="text-align:center; margin:40px 0;">
                <a href="${link}" style="background-color:#4f46e5; color:white; text-decoration:none; padding:15px 30px; border-radius:6px; font-weight:bold; display:inline-block;">
                  Access Your Account
                </a>
              </p>
              <p>If you didn't request this link, you can safely ignore this email.</p>
              <p>Thank you,<br/>The MAGIC APP Team</p>
            </td>
          </tr>
          <tr>
            <td style="padding:20px; font-size:12px; color:#888888; text-align:center; background-color:#f4f4f7;">
              © ${new Date().getFullYear()} MAGIC APP. All rights reserved.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
