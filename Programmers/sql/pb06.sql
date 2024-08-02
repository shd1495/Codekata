SELECT name,
        count(name) cnt
from animal_ins
group by 1
having count(name) > 1
order by 1
