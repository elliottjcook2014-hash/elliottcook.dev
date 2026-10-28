async function checkAdminPermission() {
    try {
        const response = await fetch(
            'https://api.elliottcook.dev/accounts/me',
            {
                method: 'GET',
                credentials: 'include',
            }
        );

        if (!response.ok) {
            console.error('Profile request failed:', response.status);
            return;
        }

        const data = await response.json();
        const perm = String(data.permission_level);

        if (perm === '2') {
            document.querySelectorAll('.admin').forEach(element => {
                element.style.display = 'block';
            });
        }
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
}

checkAdminPermission();