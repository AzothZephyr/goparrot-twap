const fs = require('fs')
const path = require('path')

;(() => {
  const file = path.join(__dirname, '../dist/airdrop/index.html')
  const html = fs.readFileSync(file).toString()
  const url = 'https://woofsolana.com'

  const newHtml = html.replace(
    '</head>',
    `<meta name="twitter:card" content="summary_large_image"/><meta name="twitter:url" content="${url}"/><meta name="twitter:title" content="Woof Bounty Airdrop"/><meta name="twitter:description" content="To continue recent momentum and further drive growth for the Solana ecosystem, Woof is launching a bounty airdrop campaign."/><meta name="twitter:image" content="${url}/airdrop.jpg"/></head>`
  )
  fs.writeFileSync(file, newHtml, 'utf-8')
})()
