import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class EmailService {

    constructor(
    ) { }

    user: string = process.env.EMAIL_USER;
    pass: string = process.env.EMAIL_PASS

    transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: this.user,
            pass: this.pass
        }
    });

    async send(to: string, subject: string, text: string, html: string): Promise<any> {
        console.log(this.user, this.pass)
        return await this.transporter.sendMail({
            from: this.user,
            to,
            subject,
            text,
            html
        })
    }

    async sendForgotPassword(to: string, token: string) {

        return await this.send(
            to,
            "Email Verification",
            "please check your email to complete the registration in the system",
            `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                <head>
                    <meta name=x-apple-disable-message-reformatting>
                    <meta http-equiv=X-UA-Compatible>
                    <meta charset=utf-8>
                    <meta name=viewport content=target-densitydpi=device-dpi>
                    <meta content=true name=HandheldFriendly>
                    <meta content=width=device-width name=viewport>
                    <style type="text/css">
                    table {
                        border-collapse: separate;
                        table-layout: fixed;
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt
                    }
                    table td {
                        border-collapse: collapse
                    }
                    .ExternalClass {
                        width: 100%
                    }
                    .ExternalClass,
                    .ExternalClass p,
                    .ExternalClass span,
                    .ExternalClass font,
                    .ExternalClass td,
                    .ExternalClass div {
                        line-height: 100%
                    }
                    * {
                        line-height: inherit;
                        text-size-adjust: 100%;
                        -ms-text-size-adjust: 100%;
                        -moz-text-size-adjust: 100%;
                        -o-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale
                    }
                    html {
                        -webkit-text-size-adjust: none !important
                    }
                    img+div {
                        display: none;
                        display: none !important
                    }
                    img {
                        Margin: 0;
                        padding: 0;
                        -ms-interpolation-mode: bicubic
                    }
                    h1, h2, h3, p, a {
                        font-family: inherit;
                        font-weight: inherit;
                        font-size: inherit;
                        line-height: 1;
                        color: inherit;
                        background: none;
                        overflow-wrap: normal;
                        white-space: normal;
                        word-break: break-word
                    }
                    a {
                        color: inherit;
                        text-decoration: none
                    }
                    h1, h2, h3, p {
                        min-width: 100%!important;
                        width: 100%!important;
                        max-width: 100%!important;
                        display: inline-block!important;
                        border: 0;
                        padding: 0;
                        margin: 0
                    }
                    a[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: none !important;
                        font-size: inherit !important;
                        font-family: inherit !important;
                        font-weight: inherit !important;
                        line-height: inherit !important
                    }
                    a[href^="mailto"],
                    a[href^="tel"],
                    a[href^="sms"] {
                        color: inherit !important;
                        text-decoration: none !important
                    }
                    @media only screen and (min-width: 481px) {
                    .hd { display: none!important }
                    }
                    @media only screen and (max-width: 480px) {
                    .hm { display: none!important }
                    }
                    [style*="Inter"] {font-family: 'Inter', BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif !important;} [style*="Inter Tight"] {font-family: 'Inter Tight', BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif !important;}
                    @media only screen and (min-width: 481px) {.t11,.t6{padding-top:50px!important;padding-bottom:50px!important}.t38,.t40{padding:30px 50px!important}.t57,.t59{padding:50px!important}.t70{mso-line-height-alt:30px!important;line-height:30px!important}.t73{width:260px!important;line-height:60px!important;mso-text-raise:13px!important}.t78,.t79{line-height:60px!important;mso-text-raise:13px!important}.t81{width:260px!important;line-height:60px!important;mso-text-raise:13px!important}.t82{mso-line-height-alt:30px!important;line-height:30px!important}.t93{mso-line-height-alt:50px!important;line-height:50px!important}.t111{mso-line-height-alt:30px!important;line-height:30px!important}.t120{line-height:27px!important;font-size:18px!important;mso-text-raise:3px!important}}
                    </style>
                    <!--[if !mso]><!-->
                    <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" type="text/css">
                    <!--<![endif]-->
                    <!--[if mso]>
                    <style type="text/css">
                    .t11,.t6{padding-top:50px !important;padding-bottom:50px !important}.t38,.t40{padding:30px 50px !important}.t57,.t59{padding:50px !important}.t70{mso-line-height-alt:30px !important;line-height:30px !important}.t73{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t78,.t79{line-height:60px !important;mso-text-raise:13px !important}.t81{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t82{mso-line-height-alt:30px !important;line-height:30px !important}.t93{mso-line-height-alt:50px !important;line-height:50px !important}.t111{mso-line-height-alt:30px !important;line-height:30px !important}.t120{line-height:27px !important;font-size:18px !important;mso-text-raise:3px !important}
                    </style>
                    <![endif]-->
                    <!--[if mso]>
                    <xml>
                    <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                    </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
                    </head>
                    <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#EDEDED;"><div class=t1 style="background-color:#EDEDED;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t121 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
                    <!--[if mso]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
                    <v:fill color=#EDEDED />
                    </v:background>
                    <![endif]-->
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td>
                    <table class=t5 role=presentation cellpadding=0 cellspacing=0 align=center><tr><td class=t6 style="overflow:hidden;padding:20px 10px 20px 10px;"><div class=t12 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                    <!--[if mso]>
                    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                    <div class=t16 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t18><tr>
                    <td class=t19 style="overflow:hidden;background-color:unset;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td><div class=t31 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                    <!--[if mso]>
                    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                    <div class=t35 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t37><tr>
                    <td class=t38 style="border-bottom:1px solid #454545;overflow:hidden;background-color:#022FAB;padding:20px 30px 20px 30px;border-radius:8px 8px 0 0;"><table role=presentation width=100% cellpadding=0 cellspacing=0></table></td>
                    </tr></table>
                    </div>
                    <!--[if mso]>
                    </td>
                    </tr></table>
                    <![endif]-->
                    </div></td></tr><tr><td><div class=t50 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                    <!--[if mso]>
                    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                    <div class=t54 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t56><tr>
                    <td class=t57 style="border-bottom:1px solid #F7F7F7;overflow:hidden;background-color:#FFFFFF;padding:30px 30px 30px 30px;border-radius:0 0 8px 8px;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
                    <table class=t62 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t63 style="overflow:hidden;width:510px;"><h1 class=t69 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter Tight';line-height:40px;font-weight:700;font-style:normal;font-size:35px;text-decoration:none;text-transform:none;direction:ltr;color:#022EAC;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Forgot your password? It happens to the best of us.</h1></td>
                    </tr></table>
                    </td></tr><tr><td><div class=t82 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
                    <table class=t84 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t85 style="overflow:hidden;width:563px;"><p class=t91 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:28px;font-weight:500;font-style:normal;font-size:21px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">To reset your password, click the button below. The link will self-destruct after 30 minutes.</p></td>
                    </tr></table>
                    </td></tr><tr><td><div class=t70 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
                    <table class=t72 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t73 style="background-color:#12E09C;overflow:hidden;width:326px;text-align:center;line-height:50px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:14px 14px 14px 14px;"><a class=t79 href=http://localhost:3001/user/forgotPassword/${token} style="display:block;font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:50px;font-weight:600;font-style:normal;font-size:18px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;" target=_blank>Reset your password</a></td>
                    </tr></table>
                    </td></tr><tr><td><div class=t111 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
                    <table class=t113 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t114 style="overflow:hidden;width:603px;"><p class=t120 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:23px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#545454;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">If you do not want to change your password or didn&#39;t request a reset, you can ignore and delete this email.</p></td>
                    </tr></table>
                    </td></tr></table></td>
                    </tr></table>
                    </div>
                    <!--[if mso]>
                    </td>
                    </tr></table>
                    <![endif]-->
                    </div></td></tr></table></td>
                    </tr></table>
                    </div>
                    <!--[if mso]>
                    </td>
                    </tr></table>
                    <![endif]-->
                    </div></td>
                    </tr></table>
                    </td></tr><tr><td><div class=t101 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                    <!--[if mso]>
                    <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                    <div class=t105 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                    <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t107><tr>
                    <td class=t108 style="overflow:hidden;padding:0 50px 0 50px;"><table role=presentation width=100% cellpadding=0 cellspacing=0></table></td>
                    </tr></table>
                    </div>
                    <!--[if mso]>
                    </td>
                    </tr></table>
                    <![endif]-->
                    </div></td></tr><tr><td><div class=t93 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr></table></td></tr></table></div></body>
                </html>
            `
        );
    }


    async sendCheckEmail(to: string, token: string) {
        return await this.send(
            to,
            "Email Verification",
            "please check your email to complete the registration in the system",
            `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
                <head>
                <meta name=x-apple-disable-message-reformatting>
                <meta http-equiv=X-UA-Compatible>
                <meta charset=utf-8>
                <meta name=viewport content=target-densitydpi=device-dpi>
                <meta content=true name=HandheldFriendly>
                <meta content=width=device-width name=viewport>
                <style type="text/css">
                table {
                border-collapse: separate;
                table-layout: fixed;
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt
                }
                table td {
                border-collapse: collapse
                }
                .ExternalClass {
                width: 100%
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                line-height: 100%
                }
                * {
                line-height: inherit;
                text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -moz-text-size-adjust: 100%;
                -o-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale
                }
                html {
                -webkit-text-size-adjust: none !important
                }
                img+div {
                display: none;
                display: none !important
                }
                img {
                Margin: 0;
                padding: 0;
                -ms-interpolation-mode: bicubic
                }
                h1, h2, h3, p, a {
                font-family: inherit;
                font-weight: inherit;
                font-size: inherit;
                line-height: 1;
                color: inherit;
                background: none;
                overflow-wrap: normal;
                white-space: normal;
                word-break: break-word
                }
                a {
                color: inherit;
                text-decoration: none
                }
                h1, h2, h3, p {
                min-width: 100%!important;
                width: 100%!important;
                max-width: 100%!important;
                display: inline-block!important;
                border: 0;
                padding: 0;
                margin: 0
                }
                a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important
                }
                a[href^="mailto"],
                a[href^="tel"],
                a[href^="sms"] {
                color: inherit !important;
                text-decoration: none !important
                }
                @media only screen and (min-width: 481px) {
                .hd { display: none!important }
                }
                @media only screen and (max-width: 480px) {
                .hm { display: none!important }
                }
                [style*="Inter"] {font-family: 'Inter', BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif !important;} [style*="Inter Tight"] {font-family: 'Inter Tight', BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif !important;}
                @media only screen and (min-width: 481px) {.t11,.t6{padding-top:50px!important;padding-bottom:50px!important}.t38,.t40{padding:30px 50px!important}.t57,.t59{padding:50px!important}.t70{mso-line-height-alt:30px!important;line-height:30px!important}.t73{width:260px!important;line-height:60px!important;mso-text-raise:13px!important}.t78,.t79{line-height:60px!important;mso-text-raise:13px!important}.t81{width:260px!important;line-height:60px!important;mso-text-raise:13px!important}.t82,.t92{mso-line-height-alt:30px!important;line-height:30px!important}.t101{line-height:27px!important;font-size:18px!important;mso-text-raise:3px!important}}
                </style>
                <!--[if !mso]><!-->
                <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" type="text/css">
                <!--<![endif]-->
                <!--[if mso]>
                <style type="text/css">
                .t11,.t6{padding-top:50px !important;padding-bottom:50px !important}.t38,.t40{padding:30px 50px !important}.t57,.t59{padding:50px !important}.t70{mso-line-height-alt:30px !important;line-height:30px !important}.t73{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t78,.t79{line-height:60px !important;mso-text-raise:13px !important}.t81{width:260px !important;line-height:60px !important;mso-text-raise:13px !important}.t82,.t92{mso-line-height-alt:30px !important;line-height:30px !important}.t101{line-height:27px !important;font-size:18px !important;mso-text-raise:3px !important}
                </style>
                <![endif]-->
                <!--[if mso]>
                <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
                </xml>
                <![endif]-->
                </head>
                <body class=t0 style="min-width:100%;Margin:0px;padding:0px;background-color:#EDEDED;"><div class=t1 style="background-color:#EDEDED;"><table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td class=t102 style="font-size:0;line-height:0;mso-line-height-rule:exactly;" valign=top align=center>
                <!--[if mso]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
                <v:fill color=#EDEDED />
                </v:background>
                <![endif]-->
                <table role=presentation width=100% cellpadding=0 cellspacing=0 border=0 align=center><tr><td>
                <table class=t5 role=presentation cellpadding=0 cellspacing=0 align=center><tr><td class=t6 style="overflow:hidden;padding:20px 10px 20px 10px;"><div class=t12 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                <!--[if mso]>
                <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                <div class=t16 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t18><tr>
                <td class=t19 style="overflow:hidden;background-color:unset;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td><div class=t31 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                <!--[if mso]>
                <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                <div class=t35 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t37><tr>
                <td class=t38 style="border-bottom:1px solid #454545;overflow:hidden;background-color:#022FAB;padding:20px 30px 20px 30px;border-radius:8px 8px 0 0;"><table role=presentation width=100% cellpadding=0 cellspacing=0></table></td>
                </tr></table>
                </div>
                <!--[if mso]>
                </td>
                </tr></table>
                <![endif]-->
                </div></td></tr><tr><td><div class=t50 style="display:inline-table;width:100%;text-align:center;vertical-align:top;">
                <!--[if mso]>
                <table role=presentation cellpadding=0 cellspacing=0 align=center valign=top><tr><td width=600 valign=top><![endif]-->
                <div class=t54 style="display:inline-table;text-align:initial;vertical-align:inherit;width:100%;max-width:600px;">
                <table role=presentation width=100% cellpadding=0 cellspacing=0 class=t56><tr>
                <td class=t57 style="border-bottom:1px solid #F7F7F7;overflow:hidden;background-color:#FFFFFF;padding:30px 30px 30px 30px;border-radius:0 0 8px 8px;"><table role=presentation width=100% cellpadding=0 cellspacing=0><tr><td>
                <table class=t62 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t63 style="overflow:hidden;width:510px;"><h1 class=t69 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter Tight';line-height:40px;font-weight:700;font-style:normal;font-size:35px;text-decoration:none;text-transform:none;direction:ltr;color:#022EAC;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Email Verification</h1></td>
                </tr></table>
                </td></tr><tr><td><div class=t82 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
                <table class=t84 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t85 style="overflow:hidden;width:563px;"><p class=t91 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:28px;font-weight:500;font-style:normal;font-size:21px;text-decoration:none;text-transform:none;direction:ltr;color:#333333;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">This is a simple email verification, please click the button below</p></td>
                </tr></table>
                </td></tr><tr><td><div class=t70 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
                <table class=t72 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t73 style="background-color:#022FAB;overflow:hidden;width:326px;text-align:center;line-height:50px;mso-line-height-rule:exactly;mso-text-raise:10px;border-radius:14px 14px 14px 14px;"><a class=t79 href=http://localhost:3001/user/checkEmail/${token} style="display:block;font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:50px;font-weight:600;font-style:normal;font-size:18px;text-decoration:none;direction:ltr;color:#FFFFFF;text-align:center;mso-line-height-rule:exactly;mso-text-raise:10px;" target=_blank>Check Email</a></td>
                </tr></table>
                </td></tr><tr><td><div class=t92 style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;</div></td></tr><tr><td>
                <table class=t94 role=presentation cellpadding=0 cellspacing=0 align=left><tr><td class=t95 style="overflow:hidden;width:603px;"><p class=t101 style="font-family:BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif, 'Inter';line-height:23px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#545454;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">This email lasts for 30 minutes</p></td>
                </tr></table>
                </td></tr></table></td>
                </tr></table>
                </div>
                <!--[if mso]>
                </td>
                </tr></table>
                <![endif]-->
                </div></td></tr></table></td>
                </tr></table>
                </div>
                <!--[if mso]>
                </td>
                </tr></table>
                <![endif]-->
                </div></td>
                </tr></table>
                </td></tr></table></td></tr></table></div></body>
                </html>
            `
        );
    }
}