# content

按照空置率最高的进行存包。

# task 拆分

-   100%(Empty rate) 的 Locker 1， 50% 的 Locker 2；存包的时候；存在 Locker 1 中。
-   0%,0%;存包的时候;存包失败
-   50%的 Locker 1，50%的 Locker 2；存包的时候，存在 Locker 1 中(根据实际情况来确定是 Locker 1，还是 Locker 2)
-   mock正确的Ticket；取包的时候；成功
-   Locker 1 Box 1 的Ticket；取包的时候，Locker 1 Box 1 Open
-   Invalid Ticket； 取包；None Box Opened/Throw error
-   Used Ticket; 取包； None Box Opened/Throw error
