try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup

config = {
    'description': 'My Project',
    'author': 'V. Kolova',
    'url': 'https://www.example.com/',
    'download_url': 'https://www.example.com/',
    'author_email': 'vkolova@example.com',
    'version': '0.1',
    'install_requires': ['nose'],
    'packages': ['ex48'],
    'scripts': [],
    'name': 'projectname'
}

setup(**config)
