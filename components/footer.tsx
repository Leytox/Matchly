export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-8">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://github.com/Leytox" target="_blank" title=":)">
          Leytox
        </a>
        . All rights reserved.
      </p>
      <a href="https://standwithukraine.com.ua" target="_blank">
        #StandWithUkraine🇺🇦
      </a>
    </footer>
  );
}
