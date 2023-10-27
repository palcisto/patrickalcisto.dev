import * as React from 'react';

export interface ContactProps {}

export default function Contact(props: ContactProps) {
  return (
    <section id="contact">
      <h2>Get in touch!</h2>
      <dl>
        <dt>Email</dt>
        <dd>
          <a href="mailto:patrickalcisto@gmail.com">patrickalcisto@gmail.com</a>
        </dd>
      </dl>
      <dl>
        <dt>Phone</dt>
        <dd>
          <a href="tel:+16193487906">+1 (619) 348-7906</a>
        </dd>
      </dl>
    </section>
  );
}
