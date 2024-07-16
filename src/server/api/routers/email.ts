// LIBRARIES
import axios from "axios";
import { z } from "zod";

// COMPONENTS
import { schema } from "~/components/forms/contactFormSchema";
import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const emailRouter = createTRPCRouter({
  sendEmailToVisitor: publicProcedure
    .input(z.object({ email: schema.email, message: schema.message }))
    .mutation(async ({ input }) => {
      return await axios
        .post(`${env.SMTP2GO_API_URL}email/send`, {
          api_key: env.SMTP2GO_API_KEY,
          to: [`<${input.email}>`],
          sender: `VPcuts <${env.SMTP2GO_SENDER_EMAIL}>`,
          template_id: "3862199",
          custom_headers: [
            {
              header: "Reply-To",
              value: `Veronica Penn <${env.SMTP2GO_SENDER_EMAIL}>`,
            },
          ],
        })
        .then((response) => {
          console.log("sendEmailToVisitor success: ", new Date());
        })
        .catch((error) => {
          console.log("sendEmailToVisitor error: ", error);
        });
    }),
  sendEmailToMe: publicProcedure
    .input(z.object({ email: schema.email, message: schema.message }))
    .mutation(async ({ input }) => {
      return await axios
        .post(`${env.SMTP2GO_API_URL}email/send`, {
          api_key: env.SMTP2GO_API_KEY,
          to: [`<${env.SMTP2GO_SENDER_EMAIL}>`],
          sender: `VPcuts <${env.SMTP2GO_SENDER_EMAIL}>`,
          template_id: "9147975",
          template_data: {
            email: input.email,
            message: input.message,
          },
          custom_headers: [
            {
              header: "Reply-To",
              value: `Veronica Penn <${env.SMTP2GO_SENDER_EMAIL}>`,
            },
          ],
        })
        .then((response) => {
          console.log("sendEmailToMe success: ", new Date());
        })
        .catch((error) => {
          console.log("sendEmailToMe error: ", error);
        });
    }),
});
