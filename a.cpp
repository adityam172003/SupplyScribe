#include<vector>
#include<iostream>

using namespace std;

int main()

{
    int t;
    cin>>t;

    while(t--)
    {
        int n;
        cin>>n;
        int p=0;
        int a=0;
        int u=0;
        int c=0;
        vector<int>plan(n,0);
        for(int i =0;i<n;i++)
        {
            int t;
            cin>>t;

            if(t==1)
            {
                c++;
                

            }
            else
            {                  
                int m = c/2; 
                int f = c-m; 
                p+= (m/2)+(m%2>0)?1:0 + (f/2)+(f%2)?1:0;
            }
        }

        cout<<p<<endl;
      

        
    }
}