const SocialMediaAccounts = () => {
  const socialMediaAccounts = {
    telegram: "t.me/sulimantwfiq",
    whatsapp:
      "wa.me/966544710774?text=%D8%A7%D9%84%D9%80%D9%80%D9%80%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%80%D9%80%D9%84%D9%8A%D9%83%D9%85",
    twitter: "twitter.com/sulimantwfiq",
    linkedin: "linkedin.com/in/sulimantwfiq",
    github: "github.com/SulimanTwfiq",
  }
  return (
    <div>
      {Object.entries(socialMediaAccounts).map(([key, value]) => (
        <a href={`https://${value}`} target="_blank" rel="noopener noreferrer">
          <img src={`/icons/${key}.svg`} width="50" alt="my image" style={{ margin: "0px 4px" }} />
        </a>
      ))}
    </div>
  )
}

export default SocialMediaAccounts
