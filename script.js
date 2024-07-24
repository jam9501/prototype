// Sample data with all candidates
const candidates = [
    { name: "Theodore Roosevelt", knot: "Four", result: "successful", party: "Republican", birthdate: "1858-10-27" },
    { name: "William H. Taft", knot: "Four", result: "successful", party: "Republican", birthdate: "1857-09-15" },
    { name: "Woodrow Wilson", knot: "Pratt", result: "successful", party: "Democratic", birthdate: "1856-12-28" },
    { name: "Warren G. Harding", knot: "Four", result: "successful", party: "Republican", birthdate: "1865-11-02" },
    { name: "Calvin Coolidge", knot: "Four", result: "successful", party: "Republican", birthdate: "1872-07-04" },
    { name: "Herbert Hoover", knot: "Four", result: "successful", party: "Republican", birthdate: "1874-08-10" },
    { name: "Franklin D. Roosevelt", knot: "Four", result: "successful", party: "Democratic", birthdate: "1882-01-30" },
    { name: "Harry S. Truman", knot: "Four", result: "successful", party: "Democratic", birthdate: "1884-05-08" },
    { name: "Dwight D. Eisenhower", knot: "Windsor", result: "successful", party: "Republican", birthdate: "1890-10-14" },
    { name: "John F. Kennedy", knot: "Small four", result: "successful", party: "Democratic", birthdate: "5/29/17" },
    { name: "Lyndon B. Johnson", knot: "Four", result: "successful", party: "Democratic", birthdate: "8/27/08" },
    { name: "Richard M. Nixon", knot: "Large four", result: "successful", party: "Republican", birthdate: "1/9/13" },
    { name: "Gerald R. Ford", knot: "Four", result: "successful", party: "Republican", birthdate: "7/14/13" },
    { name: "Jimmy Carter", knot: "Four", result: "successful", party: "Democratic", birthdate: "10/1/24" },
    { name: "Ronald Reagan", knot: "Four", result: "successful", party: "Republican", birthdate: "2/6/11" },
    { name: "George H. W. Bush", knot: "Four", result: "successful", party: "Republican", birthdate: "6/12/24" },
    { name: "Bill Clinton", knot: "Large Windsor", result: "successful", party: "Democratic", birthdate: "8/19/46" },
    { name: "George W. Bush", knot: "Full Windsor", result: "successful", party: "Republican", birthdate: "7/6/46" },
    { name: "Barack Obama", knot: "Large Four", result: "successful", party: "Democratic", birthdate: "8/4/61" },
    { name: "Donald J. Trump", knot: "Large Windsor", result: "successful", party: "Republican", birthdate: "6/14/46" },
    { name: "Joseph R. Biden", knot: "Large Four", result: "successful", party: "Democratic", birthdate: "11/20/42" },
    { name: "William McKinley", knot: "Four", result: "unsuccessful", party: "Republican", birthdate: "1843-01-29" },
    { name: "Alton B. Parker", knot: "Four", result: "unsuccessful", party: "Democratic", birthdate: "1852-05-14" },
    { name: "William J. Bryan", knot: "Four", result: "unsuccessful", party: "Democratic", birthdate: "1860-03-19" },
    { name: "Charles E. Hughes", knot: "Four", result: "unsuccessful", party: "Republican", birthdate: "1862-04-11" },
    { name: "James M. Cox", knot: "Four", result: "unsuccessful", party: "Democratic", birthdate: "1870-03-31" },
    { name: "John W. Davis", knot: "Four", result: "unsuccessful", party: "Democratic", birthdate: "1873-04-13" },
    { name: "Robert M. LaFollette", knot: "Four", result: "unsuccessful", party: "Republican", birthdate: "1855-06-14" },
    { name: "Alfred E. Smith", knot: "Four", result: "unsuccessful", party: "Democratic", birthdate: "1873-12-30" },
    { name: "Norman Thomas", knot: "Four", result: "unsuccessful", party: "Socialist", birthdate: "1884-11-20" },
    { name: "Alfred M. Landon", knot: "Four", result: "unsuccessful", party: "Republican", birthdate: "1887-09-09" },
    { name: "Wendell L. Willkie", knot: "Windsor", result: "unsuccessful", party: "Republican", birthdate: "1892-02-18" },
    { name: "Thomas E. Dewey", knot: "Windsor", result: "unsuccessful", party: "Republican", birthdate: "3/24/02" },
    { name: "J. Strom Thurmond", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "12/5/02" },
    { name: "Henry A. Wallace", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "1888-10-07" },
    { name: "Adlai E. Stevenson", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "2/5/00" },
    { name: "Barry M. Goldwater", knot: "Windsor", result: "unsuccessful", party: "Republican", birthdate: "1/1/09" },
    { name: "Hubert H. Humphrey", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "5/27/11" },
    { name: "George C. Wallace", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "8/25/19" },
    { name: "George S. McGovern", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "7/19/22" },
    { name: "John Anderson", knot: "Windsor", result: "unsuccessful", party: "Republican", birthdate: "2/15/22" },
    { name: "Walter F. Mondale", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "1/5/28" },
    { name: "Michael Dukakis", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "11/3/33" },
    { name: "H. Ross Perot", knot: "Windsor", result: "unsuccessful", party: "Independent", birthdate: "6/27/30" },
    { name: "Robert J. Dole", knot: "Windsor", result: "unsuccessful", party: "Republican", birthdate: "7/22/23" },
    { name: "Albert Gore", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "3/31/48" },
    { name: "Ralph Nader", knot: "Windsor", result: "unsuccessful", party: "Green", birthdate: "2/27/34" },
    { name: "John Kerry", knot: "Windsor", result: "unsuccessful", party: "Democratic", birthdate: "12/11/43" },
    { name: "John McCain", knot: "Windsor", result: "unsuccessful", party: "Republican", birthdate: "8/29/36" },
    { name: "Mitt Romney", knot: "Windsor", result: "unsuccessful", party: "Republican", birthdate: "3/12/47" },
    { name: "Hillary Rodham Clinton", knot: "NA", result: "unsuccessful", party: "Democratic", birthdate: "10/26/47" }
];

document.addEventListener('DOMContentLoaded', () => {
    const tieGrid = document.getElementById('tie-grid');
    const tooltip = document.getElementById('tooltip');
    const candidateName = document.getElementById('candidate-name');
    const candidateParty = document.getElementById('candidate-party');
    const candidateBirthdate = document.getElementById('candidate-birthdate');

    function createTies() {
        candidates.forEach(candidate => {
            const tieElement = document.createElement('div');
            tieElement.classList.add('tie');

            let knotImage = candidate.knot === 'Four' ? '/Users/ainsleymartinez/Downloads/Presidential Ties/four.png' : '/Users/ainsleymartinez/Downloads/Presidential Ties/windsor.png';

            tieElement.innerHTML = `<img src="${knotImage}" alt="${candidate.knot}">`;

            tieElement.style.backgroundColor = candidate.result === 'successful' ? 'green' : 'gray';

            tieElement.addEventListener('mouseover', (event) => {
                candidateName.textContent = candidate.name;
                candidateParty.textContent = `Party: ${candidate.party}`;
                candidateBirthdate.textContent = `Birthdate: ${candidate.birthdate}`;
                tooltip.style.top = `${event.pageY + 10}px`; // Adjust tooltip position relative to page scroll
                tooltip.style.left = `${event.pageX + 10}px`; // Adjust tooltip position relative to page scroll
                tooltip.classList.add('active');
            });

            tieElement.addEventListener('mouseleave', () => {
                tooltip.classList.remove('active');
            });

            tieGrid.appendChild(tieElement);
        });
    }

    createTies();
});



