export default function Footer(){
    const data={link:"",profileLink:""}
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
            <p>©All rights reserved 2024.Made by <a href={data.profileLink}>Arijit Banerjee</a><a href={data.link}>Source Code</a></p>
        </footer>
    );
}