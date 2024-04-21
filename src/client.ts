import imageUrlBuilder from '@sanity/image-url';

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "dsz30egy",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-02-01",
  token:
    "skxsJFEpp8PAYsQ9uhgkwCzzA1BriEwFK14BAITEgpFkBTspABkOZCWFzeDAuiDv9xhrZbqZaQmB7DnK3zUNNMiBJUxFz8iDQcNTrpD4DDIqIW2z9QufjQ8E5748qZGuQmxBmP7s2QqqIgCQ0dBoYr9WCXitqnCBgRFIltXuWQQRfL75AGwk",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
