
async function checkAdminPermission() {
    try {
        const response = await fetch(
            'https://api.elliottcook.dev/accounts/me',
            {
                method: 'GET',
                credentials: 'include'
            }
        );

        if (!response.ok) {
            console.error('Profile request failed:', response.status);
            return;
        }

        const data = await response.json();

        if (data.authenticated && data.user?.permission_level === 2) {
            document.querySelectorAll('.admin').forEach(element => {
                element.style.display = 'block';
            });
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

checkAdminPermission();
