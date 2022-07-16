
const HEADERS = [
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_3_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.211 Safari/605.1.15',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.210 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.209 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.208 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 6.4; WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.207 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.206 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 5.1) WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.206 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 10.0) WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.201 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.199 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.195 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 4.0; WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.198 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.197 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.194 Safari/605.1.15',
  'Mozilla/5.0 (X11; OpenBSD i386) AppleWebKit/605.1.15 (KHTML, like Gecko) Chrome/90.0.4430.192 Safari/605.1.15',
  'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/605.1.14 (KHTML, like Gecko) Chrome/90.0.4430.209 Safari/605.1.14',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/605.1.14 (KHTML, like Gecko) Chrome/90.0.4430.209 Safari/605.1.14',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_4) AppleWebKit/605.1.14 (KHTML, like Gecko) Chrome/90.0.4430.209 Safari/605.1.14',
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/605.1.13 (KHTML, like Gecko) Chrome/90.0.4430.208 Safari/605.1.13',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/605.1.12 (KHTML, like Gecko) Chrome/90.0.4429.205 Safari/605.1.12',
  'Mozilla/5.0 (X11; CrOS i686 2268.111.0) AppleWebKit/605.1.11 (KHTML, like Gecko) Chrome/90.0.4429.203 Safari/605.1.11',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AAppleWebKit/605.1.10 (KHTML, like Gecko) Chrome/90.0.4429.201 Safari/605.1.10',
  'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/605.0.9 (KHTML, like Gecko) Chrome/90.0.4428.105 Safari/605.0.9',
  'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/605.1.12 (KHTML, like Gecko) Chrome/90.0.4428.196 Safari/605.1.12',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/605.0.8 (KHTML, like Gecko) Chrome/90.0.4428.97 Safari/605.0.8',
  'Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/605.0.7 (KHTML, like Gecko) Chrome/90.0.4428.92 Safari/2BC75',
  'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/605.0.4 (KHTML, like Gecko) Chrome/90.0.4428.89 Safari/605.0.4',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/605.0.2 (KHTML, like Gecko) Chrome/90.0.4427.85 Safari/605.0.2',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/605.0.1 (KHTML, like Gecko) Chrome/90.0.4427.83 Safari/605.0.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_0) AppleWebKit/604.2.9 (KHTML, like Gecko) Chrome/90.0.4427.76 Safari/604.2.9',
  'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/604.2.8 (KHTML, like Gecko) Chrome/90.0.4426.74 Safari/604.2.8',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/604.2.7 (KHTML, like Gecko) Chrome/90.0.4425.75 Safari/604.2.7',
  'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/604.2.7 (KHTML, like Gecko) Chrome/90.0.4425.75 Safari/604.2.7',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/604.2.7 (KHTML, like Gecko) Chrome/90.0.4425.75 Safari/604.2.7',
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/604.2.7 (KHTML, like Gecko) Chrome/90.0.4425.75 Safari/604.2.7',
  'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/604.2.7 (KHTML, like Gecko) Chrome/90.0.4425.74 Safari/604.2.7',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4424.65 Safari/604.2.5',
  'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4424.64 Safari/604.2.5',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4424.62 Safari/604.2.5',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4423.55 Safari/604.2.5',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4423.53 Safari/604.2.5',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4423.52 Safari/604.2.5',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4423.50 Safari/604.2.5',
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4422.94 Safari/604.2.5 UNTRUSTED/1.0 3gpp-gba UNTRUSTED/1.0',
  'Mozilla/5.0 (Macintosh; AMD Mac OS X 10_8_2) AppleWebKit/604.2.5 (KHTML, like Gecko) Chrome/90.0.4422.91 Safari/604.2.5',
  'Mozilla/5.0 (X11; CrOS i686 1660.57.0) AppleWebKit/604.2.3 (KHTML, like Gecko) Chrome/90.0.4422.89 Safari/604.2.3',
  'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/604.2.3 (KHTML, like Gecko) Chrome/90.0.4422.88 Safari/604.2.3',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/604.2.3 (KHTML, like Gecko) Chrome/90.0.4422.87 Safari/604.2.3',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/604.2.3 (KHTML, like Gecko) Chrome/90.0.4422.87 Safari/604.2.3',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/604.2.3 (KHTML, like Gecko) Chrome/90.0.4422.86 Safari/604.2.3',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_5_8) AppleWebKit/604.2.3 (KHTML, like Gecko) Chrome/90.0.4422.85 Safari/604.2.3',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/604.2.3 (KHTML, like Gecko) Chrome/90.0.4422.81 Safari/604.2.3',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.104 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.104 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.102 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.2) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.102 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.101 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.100 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.99 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.99 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4421.95 Safari/604.2.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4420.78 Safari/604.2.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4420.77 Safari/604.2.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4420.77 Safari/604.2.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_5_8) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4420.76 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.1 (KHTML, like Gecko) Ubuntu/20.10 Chromium/90.0.4420.72 Chrome/90.0.4420.72 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.1 (KHTML, like Gecko) Ubuntu/20.04 Chromium/90.0.4420.70 Chrome/90.0.4420.70 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.1 (KHTML, like Gecko) Ubuntu/19.10 Chromium/90.0.4420.69 Chrome/90.0.4420.69 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/604.2.1 (KHTML, like Gecko) Ubuntu/19.10 Chromium/90.0.4420.67 Chrome/90.0.4420.67 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4419.96 Safari/604.2.1',
  'Mozilla/5.0 (X11; FreeBSD amd64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4419.95 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4419.95 Safari/604.2.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4419.92 Safari/604.2.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_0) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4419.92 Safari/604.2.1',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_4) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4419.90 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.1 (KHTML, like Gecko) Ubuntu/20.04 Chrome/90.0.4419.86 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4418.83 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4418.83 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4418.82 Safari/604.2.1',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.2.1 (KHTML, like Gecko) Chrome/90.0.4418.81 Safari/604.2.1',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.78 Safari/604.2.0',
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.78 Safari/604.2.0.7ad-imcjapan-syosyaman-xkgi4lqg18!wgz',
  'Mozilla/5.0 (X11; CrOS i686 1193.158.0) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.75 Safari/604.2.0',
  'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.74 Safari/604.2.0',
  'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.73 Safari/604.2.0',
  'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.70 Safari/604.2.0.2xs8D9rRDFpg8g',
  'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.67 Safari/604.2.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.66 Safari/604.2.0',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/604.2.0 (KHTML, like Gecko) Chrome/90.0.4418.66 Safari/604.2.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/604.1 (KHTML, like Gecko) Chrome/90.0.4417.107 Safari/604.1',
  'Mozilla/5.0 (X11; FreeBSD i386) AppleWebKit/604.1 (KHTML, like Gecko) Chrome/90.0.4417.105 Safari/604.1',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/604.1 (KHTML, like Gecko) Ubuntu/20.10 Chromium/90.0.4417.104 Chrome/90.0.4417.104 Safari/604.1',
  'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/604.1 (KHTML, like Gecko) Chrome/90.0.4417.104 Safari/604.1',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/604.1 (KHTML, like Gecko) Chrome/90.0.4417.103 Safari/604.1',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/604.1 (KHTML, like Gecko) Ubuntu/20.04 Chromium/90.0.4417.103 Chrome/90.0.4417.103 Safari/604.1',
  'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/604.1 (KHTML, like Gecko) Chrome/90.0.4417.103 Safari/604.1',
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/604.1 (KHTML, like Gecko) Chrome/90.0.4417.101 Safari/604.1',
  'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4417.99 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4417.99 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4417.98 Safari/604.0',
  'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4417.95 Safari/604.0',
  'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4417.92 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4417.90 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4417.85 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4416.102 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4416.100 Safari/604.0',
  'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4416.99 Safari/604.0',
  'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4416.96 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4416.96 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4416.95 Safari/604.0',
  'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_0; en-US) AppleWebKit/604.0 (KHTML, like Gecko) Chrome/90.0.4416.95 Safari/604.0',
  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.90 Safari/603.9',
  'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.90 Safari/603.9',
  'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.89 Safari/603.9',
  'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.88 Safari/603.9',
  'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.88 Safari/603.9',
  'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_1; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.85 Safari/603.9',
  'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.82 Safari/603.9',
  'Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.79 Safari/603.9',
  'Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/603.9 (KHTML, like Gecko) Chrome/90.0.4416.77 Safari/603.9'
]

export const getRandomHeaders = () => ({ 'user-agent': Math.floor( Math.random() * HEADERS.length ) });