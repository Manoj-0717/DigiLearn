# DigiLearn Store

Static website for selling eBooks and digital courses.

## Free hosting (GitHub Pages)

1. Create a new empty GitHub repository (for example: `digilearn-store`).
2. In this project folder, run:

```powershell
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. In GitHub, open your repository and go to **Actions**.
4. Wait for workflow **Deploy static site to GitHub Pages** to finish.
5. Your live site URL will be:

```text
https://<your-username>.github.io/<your-repo>/
```

## Update content

Edit `index.html`, then run:

```powershell
git add .
git commit -m "Update content"
git push
```

Your site redeploys automatically.
