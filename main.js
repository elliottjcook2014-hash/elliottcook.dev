try {
    const response = await fetch('https://api.elliottcook.dev/accounts/me', {
        credentials: 'include',
        method: 'GET',
    });
} catch (error) {
    console.error('Error fetching profile:', error);
}
if (response.ok) {
    const data = await response.json();
    const perm = data.permission_level;
    if (perm === "2") {
        const adminElements = document.querySelectorAll('.admin');
        adminElements.forEach(element => {
            element.style.display = 'block';
        });
    }
}