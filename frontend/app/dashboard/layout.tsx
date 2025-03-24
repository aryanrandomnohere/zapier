import RecoilContextProvider from "../RecoilState/RecoilContextProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <html>
        <head>
          <title></title>
        </head>
        <body>
          <header></header>
    
          {children}

          <footer></footer>
        </body>
      </html>
    );
  }