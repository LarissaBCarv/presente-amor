export default function VideoFundo() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    >
      <source src="./public/nosso-aniversario.mp4" type="video/mp4" />
      Seu navegador não suporta vídeos em HTML5.
    </video>
  );
}
