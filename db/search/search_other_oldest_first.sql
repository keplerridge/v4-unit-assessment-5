SELECT hp.id AS post_id, title, content, img, profile_pic, date_created, username AS author_username FROM helo_posts hp
JOIN helo_users hu ON hu.id = hp.author_id
WHERE lower(title) LIKE $1 AND hp.author_id != $2
ORDER BY date_created desc;